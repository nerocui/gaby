using System.Collections.Generic;
using System.Threading.Tasks;
using Gaby.Models;

namespace Gaby.Data
{
    public interface IRoleRepository
    {
         Task<Role> Add(Role role);
         Task<Role> Delete(Role role);
         Task<ICollection<Role>> GetAll();
         Task<bool> Empty();
    }
}