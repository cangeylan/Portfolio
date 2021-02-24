using Microsoft.AspNetCore.Mvc;
using ObeliskData.Repositories;
using Portfolio.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Controllers
{
    public class ObeliskManagmentController : Controller
    {
        private readonly IProductRepository repository;
        public ObeliskManagmentController(IProductRepository repository) => this.repository = repository;

        public IActionResult Index(int skip = 0,int take = 5)
        {
            ProductManagmentViewModel productManagmentVM = new ProductManagmentViewModel()
            {
                CurrentPage=skip,
                Products= repository.GetAllProducts(skip,take)
            };

            return View(productManagmentVM);
        } 
    }
}
