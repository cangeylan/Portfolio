using Microsoft.EntityFrameworkCore;
using ObeliskData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObeliskData.Repositories
{
    public class SQLProductRepository : IProductRepository
    {
        private readonly ObeliskDbContext context;
        public SQLProductRepository(ObeliskDbContext context) => this.context = context;
        public IEnumerable<Product> GetAllProducts(int skip,int take) =>
            context.Products
            .Include(p => p.ProductSizes)
            .ThenInclude(p => p.Size)
            .Include(p => p.ProductColors)
            .ThenInclude(pc => pc.Color)
            .Skip(skip)
            .Take(take);

        public IEnumerable<Product> GetAllProductsOfACategory(int catId,int skip,int take)=>
             context.Products
            .Where(p => p.ProductCategory.ParentProductCategoryId == catId)
            .Include(p => p.ProductSizes)
            .ThenInclude(p => p.Size)
            .Include(p => p.ProductColors)
            .ThenInclude(pc => pc.Color)
            .Skip(skip)
            .Take(take);
            
        public IEnumerable<ProductCategory> GetParentCategories() => 
            context.ProductCategories.Where(x => x.ParentProductCategoryId == null);

        public  Task<List<ProductCategory>> GetParentCategoriesAsync() =>  context.ProductCategories.Where(pc => pc.ParentProductCategoryId == null).ToListAsync();
    }
}
