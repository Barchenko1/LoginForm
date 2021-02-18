package com.barchenko.loginFormBackend.rest;

import com.barchenko.loginFormBackend.dao.SolrBookRepository;
import com.barchenko.loginFormBackend.modal.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.websocket.server.PathParam;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class BookController {

    @Autowired
    private SolrBookRepository solrBookRepository;

    @RequestMapping(path = "/book/all", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN')")
//    @PreAuthorize("hasRole('ADMIN')" +
//            " && hasRole('USER')" )
    public Iterable<Book> fetchMockBooks() {
        return solrBookRepository.findAll();
    }

    @RequestMapping(path = "/book/{searchRequest}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN')")
    public List<Book> getBookDetails(@PathVariable String searchRequest) {
        List<Book> response = solrBookRepository.findBooksByTitle(searchRequest);
//        Book book = response.orElse(new Book());
        return response;
    }

//    @RequestMapping(path = "/api/book/{id}", method = RequestMethod.GET)
//    public Book getBookById(@PathVariable String id) {
//        Optional<Book> response = solrBookRepository.findBookByTitleOrAuthorOrDescription(id);
//        Book book = response.orElse(new Book());
//        return book;
//    }

//    @PostConstruct
//    private void getBooks() {
//        List<Book> books = new ArrayList<>();
//        int counter = 0;
//        books.add(new Book(counter++, "AAA", "A.A.", "description"));
//        books.add(new Book(counter++, "BBB", "B.B.", "description"));
//        books.add(new Book(counter++, "CCC", "C.C.", "description"));
//        books.add(new Book(counter++, "DDD", "D.D.", "description"));
//        solrBookRepository.saveAll(books);
//    }

}
