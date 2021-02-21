using Microsoft.EntityFrameworkCore;
using ObeliskData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ObeliskData.Repositories
{
    public class SQLProductRepository : IProductRepository
    {
        private readonly ObeliskDbContext context;
        public SQLProductRepository(ObeliskDbContext context) => this.context = context;
        public IEnumerable<Product> GetAllProducts(int skip,int take) => context.Products.Include(p=>p.ProductSizes).ThenInclude(p=>p.Size).Skip(skip).Take(take);
        public IEnumerable<ProductCategory> GetCategoriesWithBanners() => context.ProductCategories.Where(x => x.BannerImg != null);
    }
}
