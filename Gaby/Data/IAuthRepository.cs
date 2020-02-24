using Gaby.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gaby.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExists(string username);
        Task<bool> Delete(string username);
        Task<User> GetUserById(int id);
        Task<User> GetUserByUsername(string username);
        Task<User> ChangePassword(string username, string password);
    }
}
