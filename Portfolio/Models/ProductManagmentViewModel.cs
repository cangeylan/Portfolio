using ObeliskData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Models
{
    public class ProductManagmentViewModel
    {
        public IEnumerable<Product> Products { get; set; }
        public int CurrentPage { get; set; }
        public int PreviousPage { get => CurrentPage - 1; }
        public int NextPage { get => CurrentPage + 1; }
    
    }
}
