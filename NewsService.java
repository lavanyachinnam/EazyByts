package com.newsaggregator.services;

import com.newsaggregator.models.NewsArticle;
import com.newsaggregator.repositories.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NewsService {

    @Autowired
    private NewsRepository newsRepository;

    public List<NewsArticle> getAllNews() {
        return newsRepository.findAll();
    }

    public NewsArticle saveNews(NewsArticle newsArticle) {
        return newsRepository.save(newsArticle);
    }

    public NewsArticle getNewsById(Long id) {
        Optional<NewsArticle> news = newsRepository.findById(id);
        return news.orElse(null);
    }

    public NewsArticle updateNews(Long id, NewsArticle newsArticle) {
        if (newsRepository.existsById(id)) {
            newsArticle.setId(id);
            return newsRepository.save(newsArticle);
        }
        return null;
    }

    public void deleteNews(Long id) {
        newsRepository.deleteById(id);
    }
}
