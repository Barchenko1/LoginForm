package com.barchenko.loginFormBackend.rest;

import com.barchenko.loginFormBackend.mockObj.Book;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class BookController {

    @RequestMapping(path = "/book/all", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN')")
//    @PreAuthorize("hasRole('ADMIN')" +
//            " && hasRole('USER')" )
    public List<Book> fetchMockBooks() {
        List<Book> books = new ArrayList<>();
        int counter = 0;
        books.add(new Book(counter++, "AAA", "A.A.", "description"));
        books.add(new Book(counter++, "BBB", "B.B.", "description"));
        books.add(new Book(counter++, "CCC", "C.C.", "description"));
        books.add(new Book(counter++, "DDD", "D.D.", "description"));
        return books;
    }

    @RequestMapping(path = "/api/book", method = RequestMethod.POST)
    public Book getBookDetails(@PathParam("searchBar") String searchBar) {
        return null;
    }

}
