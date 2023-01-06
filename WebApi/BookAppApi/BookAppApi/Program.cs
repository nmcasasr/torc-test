using BookAppApi.Data;
using BookAppApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                          builder.WithOrigins("http://localhost:3000");
                      });
});

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionsString = builder.Configuration.GetConnectionString("PostgresSQLConnection");
builder.Services.AddDbContext<BooksDb>(options => options.UseNpgsql(connectionsString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapPost("/books/", async (Book e, BooksDb db) =>
{
    db.Books.Add(e);
    await db.SaveChangesAsync();

    return Results.Created($"/books/{e.book_id}", e);
});

app.MapGet("/books/{category}", async (string category, String searchValue, BooksDb db) =>
{
    return await db.Books.Where(book => Convert.ToString(EF.Property<string>(book, category)).ToLower().Contains(searchValue.ToLower())).ToListAsync();
});

app.UseCors(MyAllowSpecificOrigins);

app.Run();