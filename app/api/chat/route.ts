import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    // Fetch products and FAQs for context
    const productsRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/data/products.json`);
    const products = await productsRes.json();
    
    const faqsRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/data/faqs.json`);
    const faqs = await faqsRes.json();

    // Build context from products and FAQs
    const productContext = products.slice(0, 10).map((p: { name: string; category: string; description: string; price: number }) => 
      `${p.name} (${p.category}): ${p.description} - ₹${p.price}`
    ).join('\n');

    const faqContext = faqs.map((f: { question: string; answer: string }) => 
      `Q: ${f.question}\nA: ${f.answer}`
    ).join('\n\n');

    const systemPrompt = `You are a helpful pharmaceutical assistant for Bevilin Pharma. 

IMPORTANT SAFETY RULES:
- DO NOT provide medical prescriptions or diagnoses
- DO NOT recommend specific medications for serious conditions
- ALWAYS include this disclaimer: "⚠️ Please consult a doctor for medical advice"
- Provide general health information only
- Suggest products based on common wellness needs

Available Products:
${productContext}

Common FAQs:
${faqContext}

Guidelines:
- Be friendly and helpful
- Suggest relevant products when appropriate
- Provide general health tips
- Guide users to contact page for specific queries
- Keep responses concise and clear`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("OpenAI API error:", error);
      return NextResponse.json(
        { error: "Failed to get response from AI" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
