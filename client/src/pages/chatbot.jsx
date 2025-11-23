import { useEffect, useRef } from "react";

function Chatbot() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src ='https://cdn.jotfor.ms/agent/embedjs/019ab00fbfb67a4dbbe3e49320df52a1ce0f/embed.js'
    script.async = true;

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-agent-id="019ab00fbfb67a4dbbe3e49320df52a1ce0f"
      data-agent-auth="public"
      style={{ width: "100%", height: "600px" }}
    ></div>
  );
}

export default Chatbot;
