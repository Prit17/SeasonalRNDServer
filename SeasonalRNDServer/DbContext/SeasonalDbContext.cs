using Microsoft.EntityFrameworkCore;
using SeasonalRNDServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SeasonalRNDServer
{
    public class SeasonalDbContext:DbContext
    {
        public SeasonalDbContext(DbContextOptions<SeasonalDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Seasonal>().ToTable("date");
            modelBuilder.Entity<Seasonal>().ToTable("historicalData");
            modelBuilder.Entity<Seasonal>().ToTable("predictedData");
            modelBuilder.Entity<Seasonal>().ToTable("events");
        }
        public DbSet<Seasonal> seasonals { get; set; }
    }
}
