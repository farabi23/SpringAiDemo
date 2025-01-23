package com.ai.SpringAiDemo;


import jakarta.servlet.http.HttpServletResponse;
import org.springframework.ai.image.ImageResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class GenAIController {


    private final ImageService imageService;
    private final ChatService chatService;
    private final RecipeService recipeService;

    public GenAIController(ChatService chatService, ImageService imageService, RecipeService recipeService) {

        this.chatService = chatService;
        this.imageService = imageService;
        this.recipeService = recipeService;
    }

    @GetMapping("ask-ai")
    public String getResponse(@RequestParam String prompt) {

        return chatService.getResponse(prompt);
    }

    @GetMapping("ask-ai-options")
    public String getResponseOptions(@RequestParam String prompt) {
        return chatService.getResponseOptions(prompt);
    }

    @GetMapping("generate-image")
    public ResponseEntity<Map<String, String>> generateImages(@RequestParam String prompt) {
        // Generate the image URL
        ImageResponse imageResponse = imageService.generateImage(prompt);
        String imageUrl = imageResponse.getResult().getOutput().getUrl();

        // Return the image URL as JSON
        Map<String, String> response = new HashMap<>();
        response.put("imageUrl", imageUrl);

        return ResponseEntity.ok(response);
    }

    @GetMapping("recipe-creator")
    public String recipeCreator(@RequestParam String ingredients,
                                      @RequestParam(defaultValue = "any") String cuisine,
                                      @RequestParam(defaultValue = "") String dietaryRestrictions){
        return recipeService.createRecipe(ingredients, cuisine, dietaryRestrictions);
    }

}
