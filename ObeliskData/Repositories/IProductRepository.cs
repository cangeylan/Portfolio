using ObeliskData.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ObeliskData.Repositories
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetAllProducts(int skip, int take);
        IEnumerable<ProductCategory> GetParentCategories();
        IEnumerable<Product> GetAllProductsOfACategory(int catId,int skip,int take);
        Task<List<ProductCategory>>  GetParentCategoriesAsync();
        Task<int> GetProductAmountAsync();
    }
}
