using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace AngularProject.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly ILogger<AccountController> _logger;

        public AccountController(ILogger<AccountController> logger)
        {
            _logger = logger;
        }
        [HttpPost("login/")]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        public IActionResult Login([FromBody]LoginModel request)
        {
            return  StatusCode((int)HttpStatusCode.Created);
        }
        [HttpGet]
        public IEnumerable<int> Get()
        {
            return Enumerable.Range(0, 10);
        }
    }

    public class LoginModel
    {
        public string? Username { get; set; }
        public string? Password { get; set; }
    }
}
