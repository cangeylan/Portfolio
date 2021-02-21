using System;
using System.Collections.Generic;
using System.Text;

namespace ObeliskData.Models
{
    public partial class Size
    {
        public int SizeID { get; set; }
        public string Name { get; set; }
        public string SizeCode { get; set; }
        public virtual ICollection<ProductSize> ProductSizes { get; set; }
    }
}
