using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gaby.Models;
using Microsoft.EntityFrameworkCore;

namespace Gaby.Data
{
    public class RoleRepository : IRoleRepository
    {
        private readonly DataContext _context;
        public RoleRepository(DataContext context)
        {
            _context = context;
            if (_context.Roles.ToList().Count == 0) {
                List<Role> roles = new List<Role>();
                Role child = new Role() {
                    Name = "Child",
                    Description = "Child of the family."
                };
                Role parent = new Role() {
                    Name = "Parent",
                    Description = "Parent of the family."
                };
                Role sibling = new Role() {
                    Name = "Sibling",
                    Description = "Sibling of the child."
                };
                roles.Add(child);
                roles.Add(parent);
                roles.Add(sibling);
                _context.Roles.AddRange(roles);
                _context.SaveChanges();
            }
        }
        public Task<Role> Add(Role role)
        {
            throw new System.NotImplementedException();
        }

        public Task<Role> Delete(Role role)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> Empty()
        {
            throw new System.NotImplementedException();
        }

        public async Task<ICollection<Role>> GetAll()
        {
            return await _context.Roles.ToListAsync();
        }
    }
}