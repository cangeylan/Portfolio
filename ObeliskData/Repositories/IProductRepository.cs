using ObeliskData.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ObeliskData.Repositories
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetAllProducts(int skip, int take);
        IEnumerable<ProductCategory> GetCategoriesWithBanners();
    }
}
