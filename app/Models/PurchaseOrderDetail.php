<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseOrderDetail extends Model
{
    use HasFactory;
    protected $connection = 'mysql';
    protected $table = 'purchase_order_details';
    protected $fillable = ['customer_id', 'product_id', 'order_id'];

    
    public function Product(){
        return $this->belongsTo(Product::class, 'id');
    } 
}
