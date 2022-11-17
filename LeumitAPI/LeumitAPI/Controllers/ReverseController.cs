using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeumitBL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LeumitAPI.Controllers
{
    [ApiController]
    [Route("[api/controller]")]
    public class ReverseController : ControllerBase
    {
        private readonly IReverseService _reverseService;
        public ReverseController(IReverseService reverseService)
        {
            _reverseService = reverseService;
        }

        [HttpGet("getReversedString")]
        public IActionResult GetReversedString(string s)
        {
            return Ok(_reverseService.ReverseString(s));
        }
    }
}
