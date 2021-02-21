using Microsoft.AspNetCore.Mvc;
using ObeliskData.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Controllers
{
    public class ObeliskController : Controller
    {
        private readonly IProductRepository repository;
        public ObeliskController(IProductRepository repository) => this.repository = repository;
        public IActionResult Index() => View(repository.GetCategoriesWithBanners());
        public IActionResult Shop(int skip=0, int take=12) => View(repository.GetAllProducts( skip, take));
    }
}
