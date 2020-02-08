module.exports = {
    find,
    findById,
    findByUsername,
    findByRestaurantId, 
    add,
    update,
    remove
};

const db = require('../database/db-config');

function find() {
    return db('reviews as r')
        .select('r.id', 'r.menu_item', 'r.item_price', 'r.item_rating', 'r.item_review', 'r.restaurant_id', 'r.item_image_url', 'r.date_visited', 'r.created_at', 'updated_at', 'u.username')
        .join('users as u', 'r.reviewed_by', 'u.id')
        .orderBy('r.id')
}

function findById(id) {
    return db('reviews as r')
        .where({id})
        .orderBy('r.id')
        .first()
}

function findByRestaurantId(id) {
    return db('reviews')
        .where({ restaurant_id: id})
        .orderBy('id')
}

function findByUsername(id) {
    return db('reviews as r')
        .where({reviewed_by: id})
        .select('r.id', 'r.menu_item', 'r.item_price', 'r.item_rating', 'r.item_review', 'r.restaurant_id', 'r.item_image_url', 'r.date_visited', 'u.username')
        .join('users as u', 'r.reviewed_by', 'u.id')
        .orderBy('r.id')
}

function add(review) {
    return db('reviews')
        .insert(review)
        .returning('id')
        .then(ids => {
            const [id] = ids;
            return findById(id)
        })

}

function update(id, changes) {
    return db('reviews')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('reviews')
        .where('id', id)
        .del();
}