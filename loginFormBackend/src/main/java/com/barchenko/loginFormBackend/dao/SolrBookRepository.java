package com.barchenko.loginFormBackend.dao;

import com.barchenko.loginFormBackend.modal.Book;
import org.springframework.data.domain.Pageable;
import org.springframework.data.solr.repository.Query;
import org.springframework.data.solr.repository.SolrCrudRepository;

import java.util.List;
import java.util.Optional;

public interface SolrBookRepository extends SolrCrudRepository<Book, Integer> {
    Optional<Book> findBookByTitleOrAuthorOrDescription(String title, String author, String description);

    List<Book> findBooksByTitle(String title);

    @Query("title:*?0* OR author:*?0* OR description:*?0*")
    List<Book> findByCustomQuery(String search, Pageable pageable);
}
