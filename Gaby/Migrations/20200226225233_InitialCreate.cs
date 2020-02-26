using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Gaby.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Records",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FileNumber = table.Column<int>(nullable: false),
                    DateOfApplication = table.Column<DateTime>(nullable: false),
                    DateOfVisit = table.Column<DateTime>(nullable: false),
                    DateHelped = table.Column<DateTime>(nullable: false),
                    DiagnosisTime = table.Column<DateTime>(nullable: false),
                    DateOfRelapse = table.Column<DateTime>(nullable: false),
                    HeavenDate = table.Column<DateTime>(nullable: false),
                    LocationOfVisit = table.Column<string>(nullable: true),
                    SocialWorker = table.Column<string>(nullable: true),
                    LengthOfTreatment = table.Column<int>(nullable: false),
                    ChildId = table.Column<int>(nullable: false),
                    StreetAddress = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    PostalCode = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<int>(nullable: false),
                    CellPhone = table.Column<int>(nullable: false),
                    Email = table.Column<string>(nullable: true),
                    CancerType = table.Column<string>(nullable: true),
                    Relapse = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Records", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(nullable: true),
                    PasswordHash = table.Column<byte[]>(nullable: true),
                    PasswordSalt = table.Column<byte[]>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    DisplayName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Notes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true),
                    RecordId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Notes_Records_RecordId",
                        column: x => x.RecordId,
                        principalTable: "Records",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "People",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    DisplayName = table.Column<string>(nullable: true),
                    RoleId = table.Column<int>(nullable: false),
                    RecordId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_People", x => x.Id);
                    table.ForeignKey(
                        name: "FK_People_Records_RecordId",
                        column: x => x.RecordId,
                        principalTable: "Records",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_People_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Notes_RecordId",
                table: "Notes",
                column: "RecordId");

            migrationBuilder.CreateIndex(
                name: "IX_People_RecordId",
                table: "People",
                column: "RecordId");

            migrationBuilder.CreateIndex(
                name: "IX_People_RoleId",
                table: "People",
                column: "RoleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Notes");

            migrationBuilder.DropTable(
                name: "People");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Records");

            migrationBuilder.DropTable(
                name: "Roles");
        }
    }
}
