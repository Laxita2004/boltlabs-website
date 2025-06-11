import { SupabaseClient } from '@supabase/supabase-js';

export class ApiFeatures {
  constructor(supabaseClient, table, queryStr) {
    this.supabase = supabaseClient;
    this.table = table;
    this.queryStr = queryStr;
    this.query = this.supabase.from(this.table).select('*', { count: 'exact' });
  }

  filter() {
    const queryObj = { ...this.queryStr };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    // Apply filters (basic =, advanced = gte, gt, etc.)
    for (const [key, value] of Object.entries(queryObj)) {
      const operatorMatch = value.match(/^\$(gte|gt|lte|lt):(.+)$/);

      if (operatorMatch) {
        const [, op, val] = operatorMatch;
        switch (op) {
          case 'gte':
            this.query = this.query.gte(key, val);
            break;
          case 'gt':
            this.query = this.query.gt(key, val);
            break;
          case 'lte':
            this.query = this.query.lte(key, val);
            break;
          case 'lt':
            this.query = this.query.lt(key, val);
            break;
        }
      } else {
        this.query = this.query.eq(key, value);
      }
    }

    return this;
  }

  sort() {
    if (this.queryStr.sort) {
      const sortFields = this.queryStr.sort.split(',');
      sortFields.forEach(field => {
        const descending = field.startsWith('-');
        const fieldName = descending ? field.substring(1) : field;
        this.query = this.query.order(fieldName, { ascending: !descending });
      });
    } else {
      this.query = this.query.order('created_at', { ascending: false });
    }

    return this;
  }

  paginate() {
    const page = parseInt(this.queryStr.page) || 1;
    const limit = parseInt(this.queryStr.limit) || 10;
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    this.query = this.query.range(from, to);
    return this;
  }

  async exec() {
    const { data, error, count } = await this.query;
    if (error) throw error;
    return { data, count };
  }
}
