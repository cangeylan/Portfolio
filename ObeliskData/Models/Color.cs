using System;
using System.Collections.Generic;
using System.Text;

namespace ObeliskData.Models
{
    public partial class Color
    {
        public int ColorID { get; set; }
        public string Name { get; set; }
        public virtual ICollection<ProductColor> ProductColors { get; set; }

    }
}
