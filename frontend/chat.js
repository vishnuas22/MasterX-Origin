// pages/api/chat.js (Next.js API Route)
export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { messages, model = "llama3" } = req.body;
  
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid message format" });
    }
  
    try {
      const ollamaRes = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model, messages, stream: true }),
      });
  
      if (!ollamaRes.ok || !ollamaRes.body) {
        return res.status(500).json({ error: "Failed to connect to Ollama" });
      }
  
      // Set headers for stream
      res.setHeader("Content-Type", "text/plain");
      res.setHeader("Transfer-Encoding", "chunked");
  
      const reader = ollamaRes.body.getReader();
      const decoder = new TextDecoder();
  
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
  
        // Send chunk to frontend
        res.write(chunk);
      }
  
      res.end();
    } catch (error) {
      console.error("Ollama chat error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  