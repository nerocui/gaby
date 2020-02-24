using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gaby.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Email { get; set; }
        public DateTime Created { get; set; }
        public string DisplayName { get; set; }
    }
}
