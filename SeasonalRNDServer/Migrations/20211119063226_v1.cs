using Microsoft.EntityFrameworkCore.Migrations;

namespace SeasonalRNDServer.Migrations
{
    public partial class v1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "events",
                columns: table => new
                {
                    date = table.Column<string>(type: "text", nullable: false),
                    historicalData = table.Column<string>(type: "text", nullable: true),
                    predictedData = table.Column<string>(type: "text", nullable: true),
                    events = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_events", x => x.date);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "events");
        }
    }
}
