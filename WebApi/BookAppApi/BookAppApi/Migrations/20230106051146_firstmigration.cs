using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace BookAppApi.Migrations
{
    /// <inheritdoc />
    public partial class firstmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    bookid = table.Column<int>(name: "book_id", type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    title = table.Column<string>(type: "text", nullable: false),
                    firstname = table.Column<string>(name: "first_name", type: "text", nullable: false),
                    lastname = table.Column<string>(name: "last_name", type: "text", nullable: false),
                    totalcopies = table.Column<int>(name: "total_copies", type: "integer", nullable: false),
                    copiesinuse = table.Column<int>(name: "copies_in_use", type: "integer", nullable: false),
                    type = table.Column<string>(type: "text", nullable: false),
                    isbn = table.Column<string>(type: "text", nullable: false),
                    category = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.bookid);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Books");
        }
    }
}
