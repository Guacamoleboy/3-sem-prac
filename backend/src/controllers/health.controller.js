import { healthCheck } from '../services/health.service.js';

export function getHealthStatus(req, res) {
  const status = healthCheck();
  res.json({ status });
}