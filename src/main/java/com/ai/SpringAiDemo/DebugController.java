package com.ai.SpringAiDemo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DebugController {

    @Value("${spring.ai.openai.api-key}")
    private String apiKey;

    @GetMapping("/debug")
    public String debugConfig() {
        return "API Key: " + apiKey;
    }
}
