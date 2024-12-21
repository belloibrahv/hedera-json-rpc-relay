/*-
 *
 * Hedera JSON RPC Relay
 *
 * Copyright (C) 2024 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

export enum ConfigName {
  BATCH_REQUESTS_ENABLED = 'BATCH_REQUESTS_ENABLED',
  BATCH_REQUESTS_MAX_SIZE = 'BATCH_REQUESTS_MAX_SIZE',
  CACHE_MAX = 'CACHE_MAX',
  CACHE_TTL = 'CACHE_TTL',
  CHAIN_ID = 'CHAIN_ID',
  CLIENT_TRANSPORT_SECURITY = 'CLIENT_TRANSPORT_SECURITY',
  CONSENSUS_MAX_EXECUTION_TIME = 'CONSENSUS_MAX_EXECUTION_TIME',
  CONTRACT_CALL_GAS_LIMIT = 'CONTRACT_CALL_GAS_LIMIT',
  CONTRACT_QUERY_TIMEOUT_RETRIES = 'CONTRACT_QUERY_TIMEOUT_RETRIES',
  DEBUG_API_ENABLED = 'DEBUG_API_ENABLED',
  DEFAULT_RATE_LIMIT = 'DEFAULT_RATE_LIMIT',
  DEV_MODE = 'DEV_MODE',
  E2E_RELAY_HOST = 'E2E_RELAY_HOST',
  E2E_SERVER_PORT = 'E2E_SERVER_PORT',
  ESTIMATE_GAS_THROWS = 'ESTIMATE_GAS_THROWS',
  ETH_BLOCK_NUMBER_CACHE_TTL_MS = 'ETH_BLOCK_NUMBER_CACHE_TTL_MS',
  ETH_CALL_ACCEPTED_ERRORS = 'ETH_CALL_ACCEPTED_ERRORS',
  ETH_CALL_CACHE_TTL = 'ETH_CALL_CACHE_TTL',
  ETH_CALL_CONSENSUS_SELECTORS = 'ETH_CALL_CONSENSUS_SELECTORS',
  ETH_CALL_DEFAULT_TO_CONSENSUS_NODE = 'ETH_CALL_DEFAULT_TO_CONSENSUS_NODE',
  ETH_FEE_HISTORY_FIXED = 'ETH_FEE_HISTORY_FIXED',
  ETH_GET_BALANCE_CACHE_TTL_MS = 'ETH_GET_BALANCE_CACHE_TTL_MS',
  ETH_GET_GAS_PRICE_CACHE_TTL_MS = 'ETH_GET_GAS_PRICE_CACHE_TTL_MS',
  ETH_GET_LOGS_BLOCK_RANGE_LIMIT = 'ETH_GET_LOGS_BLOCK_RANGE_LIMIT',
  ETH_GET_TRANSACTION_COUNT_CACHE_TTL = 'ETH_GET_TRANSACTION_COUNT_CACHE_TTL',
  ETH_GET_TRANSACTION_COUNT_MAX_BLOCK_RANGE = 'ETH_GET_TRANSACTION_COUNT_MAX_BLOCK_RANGE',
  HEDERA_SPECIFIC_REVERT_STATUSES = 'HEDERA_SPECIFIC_REVERT_STATUSES',
  FEE_HISTORY_MAX_RESULTS = 'FEE_HISTORY_MAX_RESULTS',
  FILE_APPEND_CHUNK_SIZE = 'FILE_APPEND_CHUNK_SIZE',
  FILE_APPEND_MAX_CHUNKS = 'FILE_APPEND_MAX_CHUNKS',
  FILTER_API_ENABLED = 'FILTER_API_ENABLED',
  FILTER_TTL = 'FILTER_TTL',
  GAS_PRICE_PERCENTAGE_BUFFER = 'GAS_PRICE_PERCENTAGE_BUFFER',
  GAS_PRICE_TINY_BAR_BUFFER = 'GAS_PRICE_TINY_BAR_BUFFER',
  GET_RECORD_DEFAULT_TO_CONSENSUS_NODE = 'GET_RECORD_DEFAULT_TO_CONSENSUS_NODE',
  GH_ACCESS_TOKEN = 'GH_ACCESS_TOKEN',
  GITHUB_PR_NUMBER = 'GITHUB_PR_NUMBER',
  GITHUB_REPOSITORY = 'GITHUB_REPOSITORY',
  GITHUB_TOKEN = 'GITHUB_TOKEN',
  HAPI_CLIENT_DURATION_RESET = 'HAPI_CLIENT_DURATION_RESET',
  HAPI_CLIENT_ERROR_RESET = 'HAPI_CLIENT_ERROR_RESET',
  HAPI_CLIENT_TRANSACTION_RESET = 'HAPI_CLIENT_TRANSACTION_RESET',
  HBAR_RATE_LIMIT_BASIC = 'HBAR_RATE_LIMIT_BASIC',
  HBAR_RATE_LIMIT_EXTENDED = 'HBAR_RATE_LIMIT_EXTENDED',
  HBAR_RATE_LIMIT_PRIVILEGED = 'HBAR_RATE_LIMIT_PRIVILEGED',
  HBAR_RATE_LIMIT_DURATION = 'HBAR_RATE_LIMIT_DURATION',
  HBAR_RATE_LIMIT_TINYBAR = 'HBAR_RATE_LIMIT_TINYBAR',
  HEDERA_NETWORK = 'HEDERA_NETWORK',
  HBAR_SPENDING_PLANS_CONFIG = 'HBAR_SPENDING_PLANS_CONFIG',
  INITIAL_BALANCE = 'INITIAL_BALANCE',
  INPUT_SIZE_LIMIT = 'INPUT_SIZE_LIMIT',
  LIMIT_DURATION = 'LIMIT_DURATION',
  LOCAL_NODE = 'LOCAL_NODE',
  LOG_LEVEL = 'LOG_LEVEL',
  MAX_BLOCK_RANGE = 'MAX_BLOCK_RANGE',
  MEMWATCH_ENABLED = 'MEMWATCH_ENABLED',
  MIRROR_NODE_AGENT_CACHEABLE_DNS = 'MIRROR_NODE_AGENT_CACHEABLE_DNS',
  MIRROR_NODE_CONTRACT_RESULTS_LOGS_PG_MAX = 'MIRROR_NODE_CONTRACT_RESULTS_LOGS_PG_MAX',
  MIRROR_NODE_CONTRACT_RESULTS_PG_MAX = 'MIRROR_NODE_CONTRACT_RESULTS_PG_MAX',
  MIRROR_NODE_HTTP_KEEP_ALIVE = 'MIRROR_NODE_HTTP_KEEP_ALIVE',
  MIRROR_NODE_HTTP_KEEP_ALIVE_MSECS = 'MIRROR_NODE_HTTP_KEEP_ALIVE_MSECS',
  MIRROR_NODE_HTTP_MAX_SOCKETS = 'MIRROR_NODE_HTTP_MAX_SOCKETS',
  MIRROR_NODE_HTTP_MAX_TOTAL_SOCKETS = 'MIRROR_NODE_HTTP_MAX_TOTAL_SOCKETS',
  MIRROR_NODE_HTTP_SOCKET_TIMEOUT = 'MIRROR_NODE_HTTP_SOCKET_TIMEOUT',
  MIRROR_NODE_LIMIT_PARAM = 'MIRROR_NODE_LIMIT_PARAM',
  MIRROR_NODE_MAX_REDIRECTS = 'MIRROR_NODE_MAX_REDIRECTS',
  MIRROR_NODE_RETRIES = 'MIRROR_NODE_RETRIES',
  MIRROR_NODE_RETRIES_DEVMODE = 'MIRROR_NODE_RETRIES_DEVMODE',
  MIRROR_NODE_RETRY_CODES = 'MIRROR_NODE_RETRY_CODES',
  MIRROR_NODE_RETRY_DELAY = 'MIRROR_NODE_RETRY_DELAY',
  MIRROR_NODE_RETRY_DELAY_DEVMODE = 'MIRROR_NODE_RETRY_DELAY_DEVMODE',
  MIRROR_NODE_REQUEST_RETRY_COUNT = 'MIRROR_NODE_REQUEST_RETRY_COUNT',
  MIRROR_NODE_TIMEOUT = 'MIRROR_NODE_TIMEOUT',
  MIRROR_NODE_URL = 'MIRROR_NODE_URL',
  MIRROR_NODE_URL_HEADER_X_API_KEY = 'MIRROR_NODE_URL_HEADER_X_API_KEY',
  MIRROR_NODE_URL_WEB3 = 'MIRROR_NODE_URL_WEB3',
  MULTI_SET = 'MULTI_SET',
  npm_package_version = 'npm_package_version',
  OPERATOR_ID_ETH_SENDRAWTRANSACTION = 'OPERATOR_ID_ETH_SENDRAWTRANSACTION',
  OPERATOR_ID_MAIN = 'OPERATOR_ID_MAIN',
  OPERATOR_KEY_ETH_SENDRAWTRANSACTION = 'OPERATOR_KEY_ETH_SENDRAWTRANSACTION',
  OPERATOR_KEY_FORMAT = 'OPERATOR_KEY_FORMAT',
  OPERATOR_KEY_MAIN = 'OPERATOR_KEY_MAIN',
  RATE_LIMIT_DISABLED = 'RATE_LIMIT_DISABLED',
  REDIS_ENABLED = 'REDIS_ENABLED',
  REDIS_RECONNECT_DELAY_MS = 'REDIS_RECONNECT_DELAY_MS',
  REDIS_URL = 'REDIS_URL',
  REQUEST_ID_IS_OPTIONAL = 'REQUEST_ID_IS_OPTIONAL',
  SDK_REQUEST_TIMEOUT = 'SDK_REQUEST_TIMEOUT',
  SEND_RAW_TRANSACTION_SIZE_LIMIT = 'SEND_RAW_TRANSACTION_SIZE_LIMIT',
  SERVER_PORT = 'SERVER_PORT',
  SERVER_REQUEST_TIMEOUT_MS = 'SERVER_REQUEST_TIMEOUT_MS',
  SUBSCRIPTIONS_ENABLED = 'SUBSCRIPTIONS_ENABLED',
  TEST = 'TEST',
  TEST_GAS_PRICE_DEVIATION = 'TEST_GAS_PRICE_DEVIATION',
  TEST_INITIAL_ACCOUNT_STARTING_BALANCE = 'TEST_INITIAL_ACCOUNT_STARTING_BALANCE',
  TEST_TRANSACTION_RECORD_COST_TOLERANCE = 'TEST_TRANSACTION_RECORD_COST_TOLERANCE',
  TEST_WS_SERVER = 'TEST_WS_SERVER',
  TIER_1_RATE_LIMIT = 'TIER_1_RATE_LIMIT',
  TIER_2_RATE_LIMIT = 'TIER_2_RATE_LIMIT',
  TIER_3_RATE_LIMIT = 'TIER_3_RATE_LIMIT',
  TX_DEFAULT_GAS = 'TX_DEFAULT_GAS',
  USE_ASYNC_TX_PROCESSING = 'USE_ASYNC_TX_PROCESSING',
  WEB_SOCKET_HTTP_PORT = 'WEB_SOCKET_HTTP_PORT',
  WEB_SOCKET_PORT = 'WEB_SOCKET_PORT',
  WRITE_SNAPSHOT_ON_MEMORY_LEAK = 'WRITE_SNAPSHOT_ON_MEMORY_LEAK',
  WS_BATCH_REQUESTS_ENABLED = 'WS_BATCH_REQUESTS_ENABLED',
  WS_BATCH_REQUESTS_MAX_SIZE = 'WS_BATCH_REQUESTS_MAX_SIZE',
  WS_CACHE_TTL = 'WS_CACHE_TTL',
  WS_CONNECTION_LIMIT = 'WS_CONNECTION_LIMIT',
  WS_CONNECTION_LIMIT_PER_IP = 'WS_CONNECTION_LIMIT_PER_IP',
  WS_MAX_INACTIVITY_TTL = 'WS_MAX_INACTIVITY_TTL',
  WS_MULTIPLE_ADDRESSES_ENABLED = 'WS_MULTIPLE_ADDRESSES_ENABLED',
  WS_NEW_HEADS_ENABLED = 'WS_NEW_HEADS_ENABLED',
  WS_PING_INTERVAL = 'WS_PING_INTERVAL',
  WS_POLLING_INTERVAL = 'WS_POLLING_INTERVAL',
  WS_RELAY_URL = 'WS_RELAY_URL',
  WS_SAME_SUB_FOR_SAME_EVENT = 'WS_SAME_SUB_FOR_SAME_EVENT',
  WS_SUBSCRIPTION_LIMIT = 'WS_SUBSCRIPTION_LIMIT',
}