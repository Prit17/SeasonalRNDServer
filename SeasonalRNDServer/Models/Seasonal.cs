using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SeasonalRNDServer.Models
{
    public class Seasonal
    {
        [Key]
        public string date { get; set; }
        public string historicalData { get; set; }
        public string predictedData { get; set; }
        public string events { get; set; }

    }
}
