using System;
using System.Collections.Generic;
using System.Linq;

namespace LeumitBL
{
    public class ReverseService : IReverseService
    {
        public List<string> ReverseString(string s)
        {
            char[] charArray = s.ToCharArray();
            Array.Reverse(charArray);
            var newString = new string(charArray);
            return newString.Split(" ").Reverse().ToList();
        }
    }
}
