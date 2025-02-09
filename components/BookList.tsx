import { Book } from "@/app/types"
import BookCard from "./BookCard"

type Props = {
  title:string
  containerClassName:string
  books:Book[]
}
const BookList = ({title,containerClassName,books}:Props) => {
  return (
    <section className={containerClassName}>
        <h2 className="text-lime-100 text-4xl font-bebas-neue">{title}</h2>

        <ul className="book-list">
          {
            books.map(book => < BookCard key={book.title} {...book} />)
          }
        </ul>
    </section>
  )
}

export default BookList