package com.example.crmbbackend.controller;

import com.example.crmbbackend.model.Sales;
import com.example.crmbbackend.service.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sales")
public class SalesController {
    @Autowired
    private SalesService salesService;

    @GetMapping
    public List<Sales> getAllSales() {
        return salesService.getAllSales();
    }

    @GetMapping("/{id}")
    public Sales getSalesById(@PathVariable Long id) {
        return salesService.getSalesById(id);
    }

    @PostMapping
    public Sales createSales(@RequestBody Sales sales) {
        return salesService.saveSales(sales);
    }

    @PutMapping("/{id}")
    public Sales updateSales(@PathVariable Long id, @RequestBody Sales sales) {
        sales.setId(id);
        return salesService.saveSales(sales);
    }

    @DeleteMapping("/{id}")
    public void deleteSales(@PathVariable Long id) {
        salesService.deleteSales(id);
    }
}
