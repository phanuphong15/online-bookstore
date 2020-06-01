package com.maximumz.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maximumz.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
