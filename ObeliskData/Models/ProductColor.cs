namespace ObeliskData.Models
{
    public partial class ProductColor
    {
        public int ProductID { get; set; }
        public int ColorID { get; set; }
        public string Image { get; set; }
        public virtual Color Color { get; set; }
        public virtual Product Product { get; set; }
    }
}