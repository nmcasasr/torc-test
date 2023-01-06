using BookAppApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BookAppApi.Data
{
    public class BooksDb : DbContext
    {
        public BooksDb(DbContextOptions<BooksDb> options) : base(options)
        {

        }
        public DbSet<Book> Books => Set<Book>();

    }
}
