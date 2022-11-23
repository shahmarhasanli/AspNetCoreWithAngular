using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreWithAngular.Controllers
{
    public class AccountController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> Login(LoginModel login)
        {
            return NoContent();
        }
    }

    public class LoginModel
    {
        public string Username {get;set;}
        public string Password {get;set;}
    }
}
