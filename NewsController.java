package com.newsaggregator.controllers;

import com.newsaggregator.models.NewsArticle;
import com.newsaggregator.services.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
public class NewsController {

    @Autowired
    private NewsService newsService;

    @GetMapping
    public List<NewsArticle> getAllNews() {
        return newsService.getAllNews();
    }

    @PostMapping
    public NewsArticle createNews(@RequestBody NewsArticle newsArticle) {
        return newsService.saveNews(newsArticle);
    }

    @GetMapping("/{id}")
    public NewsArticle getNewsById(@PathVariable Long id) {
        return newsService.getNewsById(id);
    }

    @PutMapping("/{id}")
    public NewsArticle updateNews(@PathVariable Long id, @RequestBody NewsArticle newsArticle) {
        return newsService.updateNews(id, newsArticle);
    }

    @DeleteMapping("/{id}")
    public void deleteNews(@PathVariable Long id) {
        newsService.deleteNews(id);
    }
}
