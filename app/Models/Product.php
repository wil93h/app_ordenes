<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $connection = 'mysql';
    protected $table = 'products';
    protected $fillable = ['name', 'description', 'price', 'unit_measure'];
    
    public function purchaseDetail(){
        return $this->belongsToMany(Product::class, PurchaseOrderDetail::class,'id', 'product_id');
    }
}
