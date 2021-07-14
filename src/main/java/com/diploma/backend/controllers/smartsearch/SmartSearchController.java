package com.diploma.backend.controllers.smartsearch;

import com.diploma.backend.entity.smartsearch.ItemWithCategory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(SmartSearchController.ROOT)
public class SmartSearchController {
    static final String ROOT = "/api";

    private JdbcTemplate jdbcTemplate;

    public SmartSearchController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    String switchKeymap(String str) {
        boolean result = str.matches(".*\\p{InCyrillic}.*");
        char[] ru = {'й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э', 'я','ч', 'с','м','и','т','ь','б', 'ю','.', ' '};
        char[] en = {'q','w','e','r','t','y','u','i','o','p','[',']','a','s','d','f','g','h','j','k','l',';','"','z','x','c','v','b','n','m',',','.','/', ' '};
        StringBuilder builder = new StringBuilder();

        if (result) {
            for (int i = 0; i < str.length(); i++) {
                for (int j = 0; j < ru.length; j++ ) {
                    if (str.charAt(i) == ru[j]) {
                        builder.append(en[j]);
                    }
                }
            }
        } else {
            for (int i = 0; i < str.length(); i++) {
                for (int j = 0; j < en.length; j++ ) {
                    if (str.charAt(i) == en[j]) {
                        builder.append(ru[j]);
                    }
                }
            }
        }

        return builder.toString();
    }

    @GetMapping("/search/{itemName}")
    public List<ItemWithCategory> findAllItemWithCategoryRepository(@PathVariable String itemName) {

//        System.out.println("\n\nСмена раскладки:\n\n" + switchKeymap(itemName) + "\n\n\n\n");

        String[] words = itemName.split(" ");
        String strQuery = "WHERE name ILIKE '%" + itemName + "%'\n";
        if (words.length > 1) {
            strQuery = "WHERE name ILIKE '%" + words[0] + "%'\n";
            for (int i = 1; i < words.length; i++) {
                  strQuery += "AND name ILIKE '%" + words[i] + "%'\n";
            }
        }
        String SQL = "SELECT items.id ,items.name, podcategory.name_podcategory, category.name_category FROM items \n" +
                "INNER JOIN podcategory\n" +
                "ON items.podcategory_id = podcategory.id\n" +
                "INNER JOIN category\n" +
                "ON podcategory.category_id = category.id\n" +
                 strQuery +
                "OR category.name_category ILIKE '%"+ itemName + "%'\n" +
                "OR podcategory.name_podcategory ILIKE '%"+ itemName + "%'";

        List<ItemWithCategory> itemWithCategory = jdbcTemplate.query(SQL,
                rs -> {
                    List<ItemWithCategory> list = new ArrayList<ItemWithCategory>();
                    while (rs.next()) {
                        ItemWithCategory itemWithCategory1 = new ItemWithCategory();
                        itemWithCategory1.setId(rs.getInt("id"));
                        itemWithCategory1.setItemName(rs.getString("name"));
                        itemWithCategory1.setCategoryName(rs.getString("name_category"));
                        itemWithCategory1.setSubcategoryName(rs.getString("name_podcategory"));
                        list.add(itemWithCategory1);
                    }

                    return list;
                });
        if (itemWithCategory.isEmpty()) {
            for (int k = 0; k < words.length; k++) {
                String switchedResult = switchKeymap(words[k]);

                words = switchedResult.split(" ");
                strQuery = "WHERE name ILIKE '%" + switchedResult + "%'\n";
                if (words.length > 1) {
                    strQuery = "WHERE name ILIKE '%" + words[0] + "%'\n";
                    for (int i = 1; i < words.length; i++) {
                        strQuery += "AND name ILIKE '%" + words[i] + "%'\n";
                    }
                }
                SQL = "SELECT items.id ,items.name, podcategory.name_podcategory, category.name_category FROM items \n" +
                        "INNER JOIN podcategory\n" +
                        "ON items.podcategory_id = podcategory.id\n" +
                        "INNER JOIN category\n" +
                        "ON podcategory.category_id = category.id\n" +
                        strQuery +
                        "OR category.name_category ILIKE '%" + switchedResult + "%'\n" +
                        "OR podcategory.name_podcategory ILIKE '%" + switchedResult + "%'";

                itemWithCategory = jdbcTemplate.query(SQL,
                        rs -> {
                            List<ItemWithCategory> list = new ArrayList<ItemWithCategory>();
                            while (rs.next()) {
                                ItemWithCategory itemWithCategory1 = new ItemWithCategory();
                                itemWithCategory1.setId(rs.getInt("id"));
                                itemWithCategory1.setItemName(rs.getString("name"));
                                itemWithCategory1.setCategoryName(rs.getString("name_category"));
                                itemWithCategory1.setSubcategoryName(rs.getString("name_podcategory"));
                                list.add(itemWithCategory1);
                            }

                            return list;
                        });
                if (itemWithCategory.isEmpty()) {
                    words[k] = switchKeymap(words[k]);

                    strQuery = "WHERE name ILIKE '%" + switchedResult + "%'\n";
                    if (words.length > 1) {
                        strQuery = "WHERE name ILIKE '%" + words[0] + "%'\n";
                        for (int i = 1; i < words.length; i++) {
                            strQuery += "AND name ILIKE '%" + words[i] + "%'\n";
                        }
                    }

                    SQL = "SELECT items.id ,items.name, podcategory.name_podcategory, category.name_category FROM items \n" +
                            "INNER JOIN podcategory\n" +
                            "ON items.podcategory_id = podcategory.id\n" +
                            "INNER JOIN category\n" +
                            "ON podcategory.category_id = category.id\n" +
                            strQuery +
                            "OR category.name_category ILIKE '%" + switchedResult + "%'\n" +
                            "OR podcategory.name_podcategory ILIKE '%" + switchedResult + "%'";

                    itemWithCategory = jdbcTemplate.query(SQL,
                            rs -> {
                                List<ItemWithCategory> list = new ArrayList<ItemWithCategory>();
                                while (rs.next()) {
                                    ItemWithCategory itemWithCategory1 = new ItemWithCategory();
                                    itemWithCategory1.setId(rs.getInt("id"));
                                    itemWithCategory1.setItemName(rs.getString("name"));
                                    itemWithCategory1.setCategoryName(rs.getString("name_category"));
                                    itemWithCategory1.setSubcategoryName(rs.getString("name_podcategory"));
                                    list.add(itemWithCategory1);
                                }

                                return list;
                            });

                    if (itemWithCategory.isEmpty()) {
                        break;
                    }
                }
            }
        }
        return itemWithCategory;
    }

    @GetMapping("/search/{itemName}/{pageNumber}")
    public List<ItemWithCategory> displayAllItemWithCategoryRepository(@PathVariable String itemName, @PathVariable Integer pageNumber) {
        String[] words = itemName.split(" ");
        String strQuery = "WHERE name ILIKE '%" + itemName + "%'\n";
        if (words.length > 1) {
            strQuery = "WHERE name ILIKE '%" + words[0] + "%'\n";
            for (int i = 1; i < words.length; i++) {
                strQuery += "AND name ILIKE '%" + words[i] + "%'\n";
            }
        }
        String SQL = "SELECT items.id ,items.name, podcategory.name_podcategory, category.name_category, items.photo, items.price FROM items \n" +
                "INNER JOIN podcategory\n" +
                "ON items.podcategory_id = podcategory.id\n" +
                "INNER JOIN category\n" +
                "ON podcategory.category_id = category.id\n" +
                 strQuery +
                "OR category.name_category ILIKE '%"+ itemName + "%'\n" +
                "OR podcategory.name_podcategory ILIKE '%"+ itemName + "%'\n" +
                "ORDER BY items.name\n" +
                "LIMIT 20\n" +
                "OFFSET " + pageNumber;

        List<ItemWithCategory> itemWithCategory = jdbcTemplate.query(SQL,
                rs -> {
                    List<ItemWithCategory> list = new ArrayList<ItemWithCategory>();
                    while (rs.next()) {
                        ItemWithCategory itemWithCategory1 = new ItemWithCategory();
                        itemWithCategory1.setId(rs.getInt("id"));
                        itemWithCategory1.setItemName(rs.getString("name"));
                        itemWithCategory1.setCategoryName(rs.getString("name_category"));
                        itemWithCategory1.setSubcategoryName(rs.getString("name_podcategory"));
                        itemWithCategory1.setPhotography(rs.getString("photo"));
                        itemWithCategory1.setPrice(rs.getString("price"));
                        list.add(itemWithCategory1);
                    }
                    return list;
                });

        if (itemWithCategory.isEmpty()) {
            for (int k = 0; k < words.length; k++) {
                String switchedResult = switchKeymap(words[k]);

                words = switchedResult.split(" ");
                strQuery = "WHERE name ILIKE '%" + switchedResult + "%'\n";
                if (words.length > 1) {
                    strQuery = "WHERE name ILIKE '%" + words[0] + "%'\n";
                    for (int i = 1; i < words.length; i++) {
                        strQuery += "AND name ILIKE '%" + words[i] + "%'\n";
                    }
                }
                SQL = "SELECT items.id ,items.name, podcategory.name_podcategory, category.name_category, items.photo, items.price FROM items \n" +
                        "INNER JOIN podcategory\n" +
                        "ON items.podcategory_id = podcategory.id\n" +
                        "INNER JOIN category\n" +
                        "ON podcategory.category_id = category.id\n" +
                        strQuery +
                        "OR category.name_category ILIKE '%"+ switchedResult + "%'\n" +
                        "OR podcategory.name_podcategory ILIKE '%"+ switchedResult + "%'\n" +
                        "ORDER BY items.name\n" +
                        "LIMIT 20\n" +
                        "OFFSET " + pageNumber;

                itemWithCategory = jdbcTemplate.query(SQL,
                        rs -> {
                            List<ItemWithCategory> list = new ArrayList<ItemWithCategory>();
                            while (rs.next()) {
                                ItemWithCategory itemWithCategory1 = new ItemWithCategory();
                                itemWithCategory1.setId(rs.getInt("id"));
                                itemWithCategory1.setItemName(rs.getString("name"));
                                itemWithCategory1.setCategoryName(rs.getString("name_category"));
                                itemWithCategory1.setSubcategoryName(rs.getString("name_podcategory"));
                                itemWithCategory1.setPhotography(rs.getString("photo"));
                                itemWithCategory1.setPrice(rs.getString("price"));
                                list.add(itemWithCategory1);
                            }

                            return list;
                        });
                if (itemWithCategory.isEmpty()) {
                    words[k] = switchKeymap(words[k]);

                    strQuery = "WHERE name ILIKE '%" + switchedResult + "%'\n";
                    if (words.length > 1) {
                        strQuery = "WHERE name ILIKE '%" + words[0] + "%'\n";
                        for (int i = 1; i < words.length; i++) {
                            strQuery += "AND name ILIKE '%" + words[i] + "%'\n";
                        }
                    }

                    SQL = "SELECT items.id ,items.name, podcategory.name_podcategory, category.name_category, items.photo, items.price FROM items \n" +
                            "INNER JOIN podcategory\n" +
                            "ON items.podcategory_id = podcategory.id\n" +
                            "INNER JOIN category\n" +
                            "ON podcategory.category_id = category.id\n" +
                            strQuery +
                            "OR category.name_category ILIKE '%"+ switchedResult + "%'\n" +
                            "OR podcategory.name_podcategory ILIKE '%"+ switchedResult + "%'\n" +
                            "ORDER BY items.name\n" +
                            "LIMIT 20\n" +
                            "OFFSET " + pageNumber;

                    itemWithCategory = jdbcTemplate.query(SQL,
                            rs -> {
                                List<ItemWithCategory> list = new ArrayList<ItemWithCategory>();
                                while (rs.next()) {
                                    ItemWithCategory itemWithCategory1 = new ItemWithCategory();
                                    itemWithCategory1.setId(rs.getInt("id"));
                                    itemWithCategory1.setItemName(rs.getString("name"));
                                    itemWithCategory1.setCategoryName(rs.getString("name_category"));
                                    itemWithCategory1.setSubcategoryName(rs.getString("name_podcategory"));
                                    itemWithCategory1.setPhotography(rs.getString("photo"));
                                    itemWithCategory1.setPrice(rs.getString("price"));
                                    list.add(itemWithCategory1);
                                }

                                return list;
                            });

                    if (itemWithCategory.isEmpty()) {
                        break;
                    }
                }
            }
        }

        return itemWithCategory;
    }

    @GetMapping("/search/count/{itemName}")
    public Integer countOfSearchableValues(@PathVariable String itemName) {
        String[] words = itemName.split(" ");
        String strQuery = "WHERE name ILIKE '%" + itemName + "%'\n";
        if (words.length > 1) {
            strQuery = "WHERE name ILIKE '%" + words[0] + "%'\n";
            for (int i = 1; i < words.length; i++) {
                strQuery += "AND name ILIKE '%" + words[i] + "%'\n";
            }
        }
        String SQL = "SELECT COUNT(items.id) as counter FROM items \n" +
                "INNER JOIN podcategory\n" +
                "ON items.podcategory_id = podcategory.id\n" +
                "INNER JOIN category\n" +
                "ON podcategory.category_id = category.id\n" +
                 strQuery +
                "OR category.name_category ILIKE '%"+ itemName + "%'\n" +
                "OR podcategory.name_podcategory ILIKE '%"+ itemName + "%'";

        Integer counter = jdbcTemplate.queryForObject(SQL, Integer.class);
        if (counter == 0) {
            for (int k = 0; k < words.length; k++) {
                String switchedResult = switchKeymap(words[k]);

                words = switchedResult.split(" ");
                strQuery = "WHERE name ILIKE '%" + switchedResult + "%'\n";
                if (words.length > 1) {
                    strQuery = "WHERE name ILIKE '%" + words[0] + "%'\n";
                    for (int i = 1; i < words.length; i++) {
                        strQuery += "AND name ILIKE '%" + words[i] + "%'\n";
                    }
                }
                SQL = "SELECT COUNT(items.id) as counter FROM items \n" +
                        "INNER JOIN podcategory\n" +
                        "ON items.podcategory_id = podcategory.id\n" +
                        "INNER JOIN category\n" +
                        "ON podcategory.category_id = category.id\n" +
                        strQuery +
                        "OR category.name_category ILIKE '%"+ switchedResult + "%'\n" +
                        "OR podcategory.name_podcategory ILIKE '%"+ switchedResult + "%'";

                counter = jdbcTemplate.queryForObject(SQL, Integer.class);
                if (counter == 0) {
                    words[k] = switchKeymap(words[k]);

                    strQuery = "WHERE name ILIKE '%" + switchedResult + "%'\n";
                    if (words.length > 1) {
                        strQuery = "WHERE name ILIKE '%" + words[0] + "%'\n";
                        for (int i = 1; i < words.length; i++) {
                            strQuery += "AND name ILIKE '%" + words[i] + "%'\n";
                        }
                    }

                    SQL = "SELECT COUNT(items.id) as counter FROM items \n" +
                            "INNER JOIN podcategory\n" +
                            "ON items.podcategory_id = podcategory.id\n" +
                            "INNER JOIN category\n" +
                            "ON podcategory.category_id = category.id\n" +
                            strQuery +
                            "OR category.name_category ILIKE '%"+ switchedResult + "%'\n" +
                            "OR podcategory.name_podcategory ILIKE '%"+ switchedResult + "%'";

                    counter = jdbcTemplate.queryForObject(SQL, Integer.class);

                    if (counter == 0) {
                        break;
                    }
                }
            }
        }
        return counter;
    }

    @GetMapping("/search/count/byCategory/{category}/{itemName}")
    public Integer countOfSearchableValuesbyCategory(@PathVariable String itemName, @PathVariable String category) {
        String[] words = itemName.split(" ");
        String strQuery = "AND (name ILIKE '%" + itemName + "%'\n";
        if (words.length > 1) {
            strQuery = "AND (name ILIKE '%" + words[0] + "%'\n";
            for (int i = 1; i < words.length; i++) {
                strQuery += "AND name ILIKE '%" + words[i] + "%'\n";
            }
        }
        String SQL = "SELECT COUNT(items.id) as counter FROM items \n" +
                "INNER JOIN podcategory\n" +
                "ON items.podcategory_id = podcategory.id\n" +
                "INNER JOIN category\n" +
                "ON podcategory.category_id = category.id\n" +
                "WHERE category.name_category = '" + category + "'\n" +
                 strQuery +
                "OR podcategory.name_podcategory ILIKE '%"+ itemName + "%'\n" +
                "OR category.name_category ILIKE '%"+ itemName + "%')";

        Integer counter = jdbcTemplate.queryForObject(SQL, Integer.class);

        return counter;
    }

    @GetMapping("/search/byCategory/{category}/{itemName}")
    public List<ItemWithCategory> findAllItemByCategoryRepository(@PathVariable String category, @PathVariable String itemName) {
        String[] words = itemName.split(" ");
        String strQuery = "AND (name ILIKE '%" + itemName + "%'\n";
        if (words.length > 1) {
            strQuery = "AND (name ILIKE '%" + words[0] + "%'\n";
            for (int i = 1; i < words.length; i++) {
                strQuery += "AND name ILIKE '%" + words[i] + "%'\n";
            }
        }
        String SQL = "SELECT items.id ,items.name, podcategory.name_podcategory, category.name_category FROM items \n" +
                "INNER JOIN podcategory\n" +
                "ON items.podcategory_id = podcategory.id\n" +
                "INNER JOIN category\n" +
                "ON podcategory.category_id = category.id\n" +
                "WHERE category.name_category = '" + category + "'\n" +
                 strQuery +
                "OR podcategory.name_podcategory ILIKE '%"+ itemName + "%'\n" +
                "OR category.name_category ILIKE '%"+ itemName + "%')";

        List<ItemWithCategory> itemWithCategory = jdbcTemplate.query(SQL,
                rs -> {
                    List<ItemWithCategory> list = new ArrayList<ItemWithCategory>();
                    while (rs.next()) {
                        ItemWithCategory itemWithCategory1 = new ItemWithCategory();
                        itemWithCategory1.setId(rs.getInt("id"));
                        itemWithCategory1.setItemName(rs.getString("name"));
                        itemWithCategory1.setCategoryName(rs.getString("name_category"));
                        itemWithCategory1.setSubcategoryName(rs.getString("name_podcategory"));
                        list.add(itemWithCategory1);
                    }
                    return list;
                });
        return itemWithCategory;
    }

    @GetMapping("/search/unloadCategory/{category}/{itemName}/{pageNumber}")
    public List<ItemWithCategory> displayAllItemWithCategoryRepository(@PathVariable String itemName, @PathVariable Integer pageNumber, @PathVariable String category) {
        String[] words = itemName.split(" ");
        String strQuery = "AND (name ILIKE '%" + itemName + "%'\n";
        if (words.length > 1) {
            strQuery = "AND (name ILIKE '%" + words[0] + "%'\n";
            for (int i = 1; i < words.length; i++) {
                strQuery += "AND name ILIKE '%" + words[i] + "%'\n";
            }
        }
        String SQL = "SELECT items.id ,items.name, podcategory.name_podcategory, category.name_category, items.photo, items.price FROM items \n" +
                "INNER JOIN podcategory\n" +
                "ON items.podcategory_id = podcategory.id\n" +
                "INNER JOIN category\n" +
                "ON podcategory.category_id = category.id\n" +
                "WHERE category.name_category = '" + category + "'\n" +
                 strQuery +
                "OR podcategory.name_podcategory ILIKE '%"+ itemName + "%'" +
                "OR category.name_category ILIKE '%"+ itemName + "%')\n" +
                "ORDER BY items.name\n" +
                "LIMIT 20\n" +
                "OFFSET " + pageNumber;

        List<ItemWithCategory> itemWithCategory = jdbcTemplate.query(SQL,
                rs -> {
                    List<ItemWithCategory> list = new ArrayList<ItemWithCategory>();
                    while (rs.next()) {
                        ItemWithCategory itemWithCategory1 = new ItemWithCategory();
                        itemWithCategory1.setId(rs.getInt("id"));
                        itemWithCategory1.setItemName(rs.getString("name"));
                        itemWithCategory1.setCategoryName(rs.getString("name_category"));
                        itemWithCategory1.setSubcategoryName(rs.getString("name_podcategory"));
                        itemWithCategory1.setPhotography(rs.getString("photo"));
                        itemWithCategory1.setPrice(rs.getString("price"));
                        list.add(itemWithCategory1);
                    }
                    return list;
                });
        return itemWithCategory;
    }
}
