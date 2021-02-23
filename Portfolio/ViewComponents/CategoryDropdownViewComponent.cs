using Microsoft.AspNetCore.Mvc;
using ObeliskData.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.ViewComponents
{
    public class CategoryDropdownViewComponent: ViewComponent
    {
        private readonly IProductRepository repository;
        public CategoryDropdownViewComponent(IProductRepository repository) => this.repository = repository;
        public async Task<IViewComponentResult> InvokeAsync ()
        {
            var categories = await repository.GetParentCategoriesAsync();
            return View(categories);
        }

    }
}
