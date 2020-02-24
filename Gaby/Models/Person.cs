using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gaby.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DisplayName { get; set; }
        public Role Role { get; set; }
        public int RoleId { get; set; }
        public Record Record { get; set; }
        public int RecordId { get; set; }
    }
}
