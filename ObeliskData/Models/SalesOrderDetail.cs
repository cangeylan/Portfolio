﻿using System;
using System.Collections.Generic;

#nullable disable

namespace ObeliskData.Models
{
    public partial class SalesOrderDetail
    {
        public int SalesOrderId { get; set; }
        public int SalesOrderDetailId { get; set; }
        public short OrderQty { get; set; }
        public int ColorID { get; set; }
        public int SizeID { get; set; }
        public int ProductId { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal UnitPriceDiscount { get; set; }
        public decimal LineTotal { get; set; }
        public Guid Rowguid { get; set; }
        public DateTime ModifiedDate { get; set; }
        public virtual Size Size { get; set; }
        public virtual Color Color { get; set; }
        public virtual Product Product { get; set; }
        public virtual SalesOrderHeader SalesOrder { get; set; }
        //public virtual ICollection<ProductSize> ProductSizes { get; set; }
        //public virtual ICollection<ProductColor> ProductColors { get; set; }
    }
}
