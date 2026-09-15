import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookService, Book } from './services/book';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  books: Book[];

  newBook = {
    title: '',
    author: '',
    pages: 0
  };

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  addBook() {
    if (!this.newBook.title.trim() || !this.newBook.author.trim()) {
      return;
    }

    this.bookService.addBook(
      this.newBook.title,
      this.newBook.author,
      this.newBook.pages
    );

    this.books = this.bookService.getBooks();

    this.newBook = {
      title: '',
      author: '',
      pages: 0
    };
  }

  deleteBook(id: number) {
    this.bookService.removeBook(id);
    this.books = this.bookService.getBooks();
  }
}