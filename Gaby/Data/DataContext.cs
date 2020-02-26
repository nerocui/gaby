using Gaby.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gaby.Data
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Record> Records { get; set; }
        public DbSet<Person> People { get; set; }
        public DbSet<Note> Notes { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Note>()
                .HasOne(n => n.Record)
                .WithMany(r => r.Notes)
                .HasForeignKey(n => n.RecordId)
                .OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<Person>()
                .HasOne(p => p.Record)
                .WithMany(r => r.People)
                .HasForeignKey(p => p.RecordId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
