using Microsoft.AspNetCore.Mvc;
using ObeliskData.Models;
using ObeliskData.Repositories;
using Portfolio.Models;
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
        
        public IActionResult Index()=> View(repository.GetParentCategories());
        public IActionResult Shop(int catId,int skip = 0,int take = 12)
            =>catId < 1 ? View(repository.GetAllProducts(skip,take)) : View(repository.GetAllProductsOfACategory(catId,skip,take));
    }
}
