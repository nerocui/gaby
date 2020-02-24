using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gaby.Models
{
    public class Note
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public Record Record { get; set; }
        public int RecordId { get; set; }
    }
}
